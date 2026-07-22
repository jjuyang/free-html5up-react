// src/components/Sidebar.tsx
"use client";
import { useState, useEffect, useRef, useCallback, type JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import type { MenuItem, SubMenuItem, ContactInfo } from "../data/sidebarData";
import { PostItem } from "../data/postData";

interface SidebarProps {
  isInactive: boolean;
  setIsInactive: React.Dispatch<React.SetStateAction<boolean>>;
}

// ⚡ API 응답 데이터 타입을 정의합니다.
interface SidebarData {
  sidebarHeaderData: { title: string }[];
  menuList: MenuItem[];
  contactInfo: ContactInfo;
}

function Sidebar({ isInactive, setIsInactive }: SidebarProps): JSX.Element {
  const [sidebarData, setSidebarData] = useState<SidebarData | null>(null);
  // 여러 서브메뉴의 상태를 객체로 관리
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  // useRef에 HTMLDivElement 타입을 지정하여 DOM 접근 시 타입 안전성 확보
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [fixedTop, setFixedTop] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const [miniPosts, setMiniPosts] = useState<PostItem[]>([]);

  const calculatePosition = useCallback(() => {
    if (!sidebarRef.current) return;

    // 모바일 환경이면 fixed 로직을 초기화하고 종료
    if (window.innerWidth <= 1280) {
      setIsFixed(false);
      setFixedTop(0);
      return;
    }

    // fixed 상태에서도 컨텐츠의 전체 높이를 정확히 측정하기 위해 scrollHeight 사용
    const sidebarHeight = sidebarRef.current.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    // 사이드바 하단이 화면 하단에 닿는 시점(임계값) 계산
    const threshold =
      sidebarHeight > viewportHeight ? sidebarHeight - viewportHeight : 0;

    // 데스크탑 화면(1280px 초과)에서만 스크롤에 따른 고정 로직 적용
    if (scrollTop > threshold) {
      setIsFixed(true);
      // 현재 뷰포트 내에서의 위치를 그대로 유지하도록 top 값 계산 (음수값 혹은 0)
      setFixedTop(
        sidebarHeight > viewportHeight ? viewportHeight - sidebarHeight : 0,
      );
    } else {
      setIsFixed(false);
    }
  }, []);

  const toggleMenu = (id: string, e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault(); // 링크 이동 방지
    setOpenMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    // 메뉴가 열리거나 닫혀 높이가 변하므로 다음 틱에서 위치 재계산
    setTimeout(calculatePosition, 0);
  };

  const pathname = usePathname() ?? "/";

  useEffect(() => {
    const fetchMiniPosts = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "";
        // 메인 포스트 API 호출
        const res = await fetch(`${baseUrl}/api/posts`);
        if (res.ok) {
          const data = await res.json();
          // 상위 3개 데이터만 추출하여 상태에 저장
          setMiniPosts(data.slice(0, 3));
        }
      } catch (error) {
        console.error("미니포스트 API 에러:", error);
      }
    };
    fetchMiniPosts();
  }, []);

  // ⚡ API를 통해 사이드바 데이터를 가져옵니다.
  useEffect(() => {
    const fetchSidebarData = async () => {
      try {
        // 빌드 시점과 클라이언트 환경 모두에서 동작하도록 절대 경로를 사용합니다.
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "";
        const res = await fetch(`${baseUrl}/api/sidebar`);
        if (!res.ok) {
          throw new Error("사이드바 데이터를 불러오지 못했습니다.");
        }
        const data: SidebarData = await res.json();
        setSidebarData(data);
      } catch (error) {
        console.error("사이드바 API 통신 에러:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSidebarData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", calculatePosition, { passive: true });
    window.addEventListener("resize", calculatePosition);
    // 컴포넌트 마운트 후 초기 위치 계산
    // 렌더링 단계에서 직접 호출되지 않으므로 안전함
    requestAnimationFrame(calculatePosition);

    return () => {
      window.removeEventListener("scroll", calculatePosition);
      window.removeEventListener("resize", calculatePosition);
    };
  }, [calculatePosition]);

  useEffect(() => {
    setIsInactive(true);
    if (window.innerWidth <= 1280) {
      setIsInactive(true);
    } else {
      setIsInactive(false);
    }
  }, [pathname, setIsInactive]);

  // 데이터 로딩 중일 때 표시할 UI
  if (loading) {
    return <div className="inner">사이드바 로딩 중...</div>;
  }

  return (
    <>
      <div
        ref={sidebarRef}
        className={`inner ${isFixed ? "is-fixed" : ""}`}
        style={isFixed ? { top: `${fixedTop}px` } : {}}
      >
        {/* Search */}
        <section id="search" className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Search" />
          </form>
        </section>

        {/* Menu */}
        <nav id="menu">
          <header className="major">
            <h2>{sidebarData?.sidebarHeaderData[0]?.title}</h2>
          </header>
          <ul>
            {sidebarData?.menuList.map((item: MenuItem) => (
              <li key={item.id}>
                {/* 서브메뉴가 있을 경우 */}
                {item.submenu ? (
                  <>
                    <span
                      className={
                        "opener " + (openMenus[item.id] ? "active" : "")
                      }
                      onClick={(e) => toggleMenu(item.id, e)}
                    >
                      {item.title}
                    </span>
                    {openMenus[item.id] && (
                      <ul>
                        {item.submenu.map((subItem: SubMenuItem) => (
                          <li key={subItem.id}>
                            {subItem.link === "#" ? (
                              <a href="#" onClick={(e) => e.preventDefault()}>
                                {subItem.title}
                              </a>
                            ) : (
                              <Link
                                href={subItem.link}
                                className={
                                  pathname === subItem.link ? "active" : ""
                                }
                              >
                                {subItem.title}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : // 서브메뉴가 없을 경우
                item.link === "#" ? (
                  // 링크가 '#'인 경우는 실제 페이지 이동이 없는 메뉴로 간주
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {item.title}
                  </a>
                ) : (
                  // 실제 페이지로 이동하는 메뉴
                  <Link
                    href={item.link}
                    className={pathname === item.link ? "active" : ""}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Section */}
        <section>
          <header className="major">
            <h2>{sidebarData?.sidebarHeaderData[1]?.title}</h2>
          </header>

          <div className="mini-posts">
            {miniPosts.map((post) => (
              <article key={post.id}>
                <Link href={post.link || "#"} className="image">
                  <Image
                    src={
                      post.image
                        ? `/${post.image}`
                        : "https://placehold.co/600x400.png"
                    }
                    alt={post.title}
                    width={300}
                    height={200}
                  />
                </Link>
                <p>{post.description}</p>
              </article>
            ))}
          </div>

          <ul className="actions">
            <li>
              <a href="#" className="button">
                More
              </a>
            </li>
          </ul>
        </section>

        {/* Section */}
        <section>
          <header className="major">
            <h2>{sidebarData?.sidebarHeaderData[2]?.title}</h2>
          </header>
          <p>{sidebarData?.contactInfo.description}</p>
          <ul className="contact">
            <li className="icon solid fa-envelope">
              <a href="#">{sidebarData?.contactInfo.email}</a>
            </li>
            <li className="icon solid fa-phone">
              {sidebarData?.contactInfo.phone}
            </li>
            <li
              className="icon solid fa-home"
              dangerouslySetInnerHTML={{
                __html: sidebarData?.contactInfo.address ?? "",
              }}
            />
          </ul>
        </section>

        {/* Footer */}
        <footer id="footer">
          <p className="copyright">
            &copy; Untitled. All rights reserved. Demo Images:{" "}
            <Link href="https://unsplash.com">Unsplash</Link>. Design:{" "}
            <Link href="https://html5up.net">HTML5 UP</Link>.
            {/* <a> 태그 대신 Next.js의 Link 컴포넌트를 사용하여 타입스크립트 기반 라우팅 최적화 */}
          </p>
        </footer>
      </div>

      <Link
        href="#sidebar"
        className="toggle"
        onClick={(e) => {
          e.preventDefault(); // 기본 동작(페이지 상단으로 이동) 방지
          setIsInactive(!isInactive);
        }}
      >
        Toggle
      </Link>
    </>
  );
}

export default Sidebar;

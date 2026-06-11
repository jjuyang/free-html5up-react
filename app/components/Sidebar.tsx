// src/components/Sidebar.tsx
"use client";
import { useState, useEffect, useRef, useCallback, type JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarHeaderData, menuList, anteData, contactInfo, MenuItem, SubMenuItem, AnteItem } from "../data/sidebarData";

function Sidebar(): JSX.Element {

  // 여러 서브메뉴의 상태를 객체로 관리
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  // useRef에 HTMLDivElement 타입을 지정하여 DOM 접근 시 타입 안전성 확보
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [fixedTop, setFixedTop] = useState<number>(0);

  const calculatePosition = useCallback(() => {
    if (!sidebarRef.current) return;
    
    // fixed 상태에서도 컨텐츠의 전체 높이를 정확히 측정하기 위해 scrollHeight 사용
    const sidebarHeight = sidebarRef.current.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    // 사이드바 하단이 화면 하단에 닿는 시점(임계값) 계산
    const threshold = sidebarHeight > viewportHeight ? sidebarHeight - viewportHeight : 0;

    if (scrollTop > threshold) {
      setIsFixed(true);
      // 현재 뷰포트 내에서의 위치를 그대로 유지하도록 top 값 계산 (음수값 혹은 0)
      setFixedTop(sidebarHeight > viewportHeight ? viewportHeight - sidebarHeight : 0);
    } else {
      setIsFixed(false);
    }
  }, []);

  const toggleMenu = (id: string, e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault(); // 링크 이동 방지
    setOpenMenus(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    // 메뉴가 열리거나 닫혀 높이가 변하므로 다음 틱에서 위치 재계산
    setTimeout(calculatePosition, 0);
  };

  const pathname = usePathname() ?? "/";

  useEffect(() => {
    window.addEventListener('scroll', calculatePosition, { passive: true });
    window.addEventListener('resize', calculatePosition);
    calculatePosition();

    return () => {
      window.removeEventListener('scroll', calculatePosition);
      window.removeEventListener('resize', calculatePosition);
    };
  }, [calculatePosition]);

  return (
    <div 
      ref={sidebarRef} 
      className={`inner ${isFixed ? 'is-fixed' : ''}`}
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
          <h2>{sidebarHeaderData[0]?.title}</h2>
        </header>
        <ul>
          {menuList.map((item: MenuItem) => (
            <li key={item.id}>
              {/* 서브메뉴가 있을 경우 */}
              {item.submenu ? (
                <>
                  <span className={'opener ' + (openMenus[item.id] ? 'active' : '')} onClick={(e) => toggleMenu(item.id, e)}>
                    {item.title}
                  </span>
                  {openMenus[item.id] && (
                    <ul>
                      {item.submenu.map((subItem: SubMenuItem) => (
                        <li key={subItem.id}>
                          {subItem.link === '#' ? (
                            <a href="#" onClick={(e) => e.preventDefault()}>{subItem.title}</a>
                          ) : (
                            <Link href={subItem.link} className={pathname === subItem.link ? 'active' : ''}>
                              {subItem.title}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                // 서브메뉴가 없을 경우
                  item.link === '#' ? (
                  // 링크가 '#'인 경우는 실제 페이지 이동이 없는 메뉴로 간주
                  <a href="#" onClick={(e) => e.preventDefault()}>{item.title}</a>
                ) : (
                  // 실제 페이지로 이동하는 메뉴
                  <Link href={item.link} className={pathname === item.link ? 'active' : ''}>
                    {item.title}
                  </Link>
                )
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Section */}
      <section>
        <header className="major">
          <h2>{sidebarHeaderData[1]?.title}</h2>
        </header>
        <div className="mini-posts">
          {anteData.map((item: AnteItem) => (
            <article key={item.id}>
              <Link href={item.link} className="image">
                <img src={`/${item.image}`} alt={item.title} />
              </Link>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <ul className="actions">
          <li><a href="#" className="button">More</a></li>
        </ul>
      </section>

      {/* Section */}
      <section>
        <header className="major">
          <h2>{sidebarHeaderData[2]?.title}</h2>
        </header>
          <p>{contactInfo.description}</p>
        <ul className="contact">
          <li className="icon solid fa-envelope"><a href="#">{contactInfo.email}</a></li>
          <li className="icon solid fa-phone">{contactInfo.phone}</li>
          <li className="icon solid fa-home" dangerouslySetInnerHTML={{ __html: contactInfo.address }} />
        </ul>
      </section>

      {/* Footer */}
      <footer id="footer">
        <p className="copyright">
          &copy; Untitled. All rights reserved. 
          Demo Images: <Link href="https://unsplash.com">Unsplash</Link>. 
          Design: <Link href="https://html5up.net">HTML5 UP</Link>.
          {/* <a> 태그 대신 Next.js의 Link 컴포넌트를 사용하여 타입스크립트 기반 라우팅 최적화 */}
        </p>
      </footer>

    </div>
  );
}

export default Sidebar;
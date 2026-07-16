// src/components/SectionPosts.tsx

import type { JSX } from "react";
import SectionHeader from "../SectionHeader";
import Link from "next/link";
import type { ApiPost } from "@/app/types";
import Image from "next/image";

// ⚡ 가상의 외부 API 대신, 내 프로젝트 내부의 API 엔드포인트 호출!
async function getMyInternalPosts(): Promise<ApiPost[]> {
  // 배포 환경과 로컬 환경 둘 다 호환되도록 절대 경로 대신 상대 경로 활용 혹은 환경 변수 처리 가능하지만,
  // Next.js 내부 fetch 시에는 절대 경로 주소가 필요하므로 안전하게 아래와 같이 처리합니다.

  const res = await fetch(`/api/posts`, {
    next: { revalidate: 60 }, // 내 데이터이므로 캐싱 주기를 1분으로 단축해 실시간 반영성 극대화!
  });

  if (!res.ok) {
    throw new Error("자체 API 데이터를 불러오는 데 실패했습니다.");
  }

  return res.json();
}
// ⚡ 컴포넌트 앞에 async를 붙여 서버 컴포넌트 비동기 모드로 전환합니다.
async function SectionPosts(): Promise<JSX.Element> {
  const posts = await getMyInternalPosts();

  // API 타이틀에 매칭해서 뿌려줄 가상 이미지 리스트
  const mockImages = [
    "pic01.jpg",
    "pic02.jpg",
    "pic03.jpg",
    "pic04.jpg",
    "pic05.jpg",
    "pic06.jpg",
  ];

  return (
    <section>
      <SectionHeader title="Ipsum sed dolor (자체 구축 API 연동)" />
      <div className="posts">
        {posts.map((post: ApiPost) => (
          <article key={post.id}>
            {/* 이미지 링크 영역 */}
            <Link href="/Generic" className="image">
              <Image // `index` is not defined. It should be `posts.indexOf(post)` or passed as a parameter to map.
                src={`/images/${mockImages[posts.indexOf(post) % mockImages.length]}`}
                alt={post.title}
                width={400}
                height={250}
              />
            </Link>

            {/* ⚡ API 서버에서 받아온 내 진짜 제목과 본문 */}
            <h3>{post.title}</h3>
            <p>{post.description}</p>

            <ul className="actions">
              <li>
                <Link href="/Generic" className="button">
                  More
                </Link>
              </li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SectionPosts;

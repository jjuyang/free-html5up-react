// src/components/SectionPosts.tsx

import type { JSX } from "react";
import SectionHeader from "../SectionHeader";
import Link from "next/link";
import type { ApiPost } from "@/app/types";
import Image from "next/image";

// ⚡ [핵심] 가상 백엔드 API 서버에서 6개의 실시간 포스트 훔쳐오기
async function getExternalPosts(): Promise<ApiPost[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6",
    {
      next: { revalidate: 3600 }, // Next.js 캐싱 튜닝 (1시간 동안 속도 초고속 유지)
    },
  );

  if (!res.ok) {
    throw new Error("API 데이터를 불러오는데 실패했습니다.");
  }

  return res.json();
}

// ⚡ 컴포넌트 앞에 async를 붙여 서버 컴포넌트 비동기 모드로 전환합니다.
async function SectionPosts(): Promise<JSX.Element> {
  const posts = await getExternalPosts();

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
      <SectionHeader title="Ipsum sed dolor (실시간 API 연동 포스트)" />
      <div className="posts">
        {posts.map((post: ApiPost, index: number) => (
          <article key={post.id}>
            {/* 이미지 링크 영역 */}
            <Link href="/Generic" className="image">
              <Image
                src={`/images/${mockImages[index]}`}
                alt={post.title}
                width={400}
                height={250}
              />
            </Link>

            {/* ⚡ 실시간 API로 가져온 가변 제목과 가변 본문 적용! */}
            <h3>{post.title}</h3>
            <p>{post.body}</p>

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

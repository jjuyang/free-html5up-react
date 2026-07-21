// src/components/SectionPosts.tsx

"use client";

import { useState, useEffect } from "react";
import type { JSX } from "react";
import SectionHeader from "../SectionHeader";
import Link from "next/link";
import type { ApiPost } from "@/app/types";
import Image from "next/image";

function SectionPosts(): JSX.Element {
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const mockImages = [
    "pic01.jpg",
    "pic02.jpg",
    "pic03.jpg",
    "pic04.jpg",
    "pic05.jpg",
    "pic06.jpg",
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) {
          console.error("포스트 데이터를 불러오지 못했습니다.");
          return;
        }
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("API 통신 에러:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>포스트 데이터를 불러오는 중...</p>;
  }

  return (
    <section>
      <SectionHeader title="Ipsum sed dolor (API 연동)" />
      <div className="posts">
        {posts.map((post: ApiPost, index: number) => (
          <article key={post.id}>
            {/* 이미지 링크 영역 */}
            <Link href="/Generic" className="image">
              <Image
                src={`/images/${mockImages[index % mockImages.length]}`}
                alt={post.title}
                width={400}
                height={250}
              />
            </Link>

            {/* API 서버에서 받아온 내 진짜 제목과 본문 */}
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

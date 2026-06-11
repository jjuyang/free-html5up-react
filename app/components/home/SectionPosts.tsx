// src/components/SectionPosts.tsx

import type { JSX } from "react";
import SectionHeader from "../SectionHeader";
import { postData } from "../../data/postData";
import Link from "next/link";

function SectionPosts(): JSX.Element {
  return (
    <section>
      <SectionHeader title="Ipsum sed dolor" />

      <div className="posts">
        {postData.map((post) => {
          // 브라우저 콘솔(F12)창에 데이터가 어떻게 들어오는지 직접 찍어봅니다.
          console.log(`포스트 ID [${post.id}]의 이미지 경로:`, post.Image);

          return (
            <article key={post.id}>
              <Link href={post.link} className="image">
                <img src="/images/pic11.jpg" alt={post.title} />
              </Link>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <ul className="actions">
                <li><Link href={post.link} className="button">More</Link></li>
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default SectionPosts;
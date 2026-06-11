// src/components/elements/Forms.tsx

"use client";
import { useState, type JSX } from "react";

interface FormData {
  name: string;
  email: string;
  category: string;
  priority: string;
  copy: boolean;
  human: boolean;
  message: string;
}

function Forms(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    category: "",
    priority: "low",
    copy: false,
    human: false,
    message: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit Data:", formData);
  };

  return (
    <>
      <h3>Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="row gtr-uniform">
          <div className="col-6 col-12-xsmall">
            <input
              type="text"
              name="demo-name"
              id="demo-name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Name"
            />
          </div>
          <div className="col-6 col-12-xsmall">
            <input
              type="email"
              name="demo-email"
              id="demo-email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Email"
            />
          </div>
          {/* ... 나머지 필드들도 동일한 방식으로 state 연결 가능 ... */}
          <div className="col-12">
            {/* React에서는 select의 초기값을 선택하기 위해 defaultValue를 사용합니다 */}
            <select name="demo-category" id="demo-category" defaultValue="">
              <option value="">- Category -</option>
              <option value="1">Manufacturing</option>
              <option value="1">Shipping</option>
              <option value="1">Administration</option>
              <option value="1">Human Resources</option>
            </select>
          </div>
          {/* Break */}
          <div className="col-4 col-12-small">
            <input
              type="radio"
              id="demo-priority-low"
              name="demo-priority"
              defaultChecked // 하나를 기본 선택하려면 checked 대신 defaultChecked
            />
            <label htmlFor="demo-priority-low">Low</label>
          </div>
          <div className="col-4 col-12-small">
            <input
              type="radio"
              id="demo-priority-normal"
              name="demo-priority"
            />
            <label htmlFor="demo-priority-normal">Normal</label>
          </div>
          <div className="col-4 col-12-small">
            <input
              type="radio"
              id="demo-priority-high"
              name="demo-priority"
            />
            <label htmlFor="demo-priority-high">High</label>
          </div>
          {/* Break */}
          <div className="col-6 col-12-small">
            <input type="checkbox" id="demo-copy" name="demo-copy" />
            <label htmlFor="demo-copy">Email me a copy</label>
          </div>
          <div className="col-6 col-12-small">
            <input type="checkbox" id="demo-human" name="demo-human" />
            <label htmlFor="demo-human">I am a human</label>
          </div>
          {/* Break */}
          <div className="col-12">
            <textarea
              name="demo-message"
              id="demo-message"
              placeholder="Enter your message"
              rows={6} // [핵심] 문자열 "6"이 아닌 숫자 6을 전달해야 합니다.
            ></textarea>
          </div>
          {/* Break */}
          <div className="col-12">
            <ul className="actions">
              <li>
                <input
                  type="submit"
                  value="Send Message"
                  className="primary"
                />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </>
  );
}

export default Forms; 
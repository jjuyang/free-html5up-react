// src/components/elements/Table.jsx
"use client"; // ⚡ 클라이언트에서 fetch 상태를 관리해야 하므로 추가합니다.

import { useState, useEffect } from "react";
import type { JSX } from "react";

interface TableRow {
  id: string;
  name: string;
  description: string;
  price: string;
}

// ⚡ API 응답 데이터 전체 구조 정의 (테이블 1, 테이블 2 데이터를 동시에 받아옴)
interface TableApiResponse {
  defaultTable: TableRow[];
  alternateTable: TableRow[];
}

function Table(): JSX.Element {
  // ⚡ API로 받아온 테이블 데이터를 보관할 상태(State)
  const [tableData, setTableData] = useState<TableRow[]>([]);
  const [tableData2, setTableData2] = useState<TableRow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // ⚡ 자체 제작한 API 서버에서 테이블 데이터 가져오기
    const fetchTableData = async () => {
      try {
        const res = await fetch(`/api/table`);

        if (!res.ok) throw new Error("테이블 데이터를 불러오지 못했습니다.");

        const data: TableApiResponse = await res.json();

        // 가져온 진짜 데이터를 상태에 저장하여 화면에 바인딩!
        setTableData(data.defaultTable);
        setTableData2(data.alternateTable);
      } catch (error) {
        console.error("테이블 API 통신 에러:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTableData();
  }, []);

  // 로딩 중일 때 보여줄 UI (깔끔함 유지)
  if (loading) {
    return <p>테이블 데이터를 실시간으로 불러오는 중...</p>;
  }
  return (
    <>
      <h3>Table</h3>

      <h4>Default (API 반영)</h4>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.description}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}></td>
              {/* ⚡ 가격 합계를 동적으로 계산하도록 한 단계 더 고도화! */}
              <td>
                {tableData && tableData.length > 0
                  ? tableData
                      .reduce(
                        (acc, cur) => acc + parseFloat(cur.price || "0"),
                        0,
                      )
                      .toFixed(2)
                  : "0.00"}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <h4>Alternate (API 반영)</h4>
      <div className="table-wrapper">
        <table className="alt">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {tableData2?.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.description}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}></td>
              <td>
                {tableData2 && tableData2.length > 0
                  ? tableData2
                      .reduce(
                        (acc, cur) => acc + parseFloat(cur.price || "0"),
                        0,
                      )
                      .toFixed(2)
                  : "0.00"}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default Table;

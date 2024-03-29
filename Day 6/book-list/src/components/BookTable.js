import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function BookTable() {
  return (
    <div>
      <table class="table mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>#ISBN</th>
          </tr>
        </thead>
        <tbody id="table-body"></tbody>
      </table>
    </div>
  );
}

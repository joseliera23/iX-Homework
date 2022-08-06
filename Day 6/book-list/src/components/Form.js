import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Form() {
  return (
    <div>
      <div class="mb-3">
        <label class="form-label"> Title </label>
        <input id="title-input" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Author</label>
        <input id="author-input" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">#ISBN</label>
        <input id="isbn-input" class="form-control" />
      </div>

      <div class="d-grid gap-2">
        <button id="button" class="btn btn-outline-secondary">
          Submit
        </button>
      </div>
    </div>
  );
}

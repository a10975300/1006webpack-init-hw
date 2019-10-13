import React from 'react'
const card = () => {
  return (
    <div className="card">
      <div className="col-md-6">
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">最讚案件</strong>
            <h3 className="mb-0">資管系作業二</h3>
            <div className="mb-2 text-muted">3月24日</div>
            <p className="card-text mb-auto">這是一個能夠在本機環境開發的前端網站，使用Gulp在Node.js環境下開發的快速開發環境</p>
            <a href="#" className="stretched-link">繼續閱讀...</a>
          </div>
          <div className="col-auto d-none d-lg-block">
            <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card

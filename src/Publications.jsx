import "./App.css";

const publications = [];

function Publications({ onBack }) {
  return (
    <div className="publications-page">
      <nav className="navbar publications-navbar">
        <div className="container nav-container">
          <button type="button" className="logo publication-logo" onClick={onBack}>
            Deepak<span>.</span>
          </button>

          <button type="button" className="back-button" onClick={onBack}>
            ← Back to Portfolio
          </button>
        </div>
      </nav>

      <main className="publications-main">
        <div className="container">
          <div className="publications-header">
            <p>RESEARCH PUBLICATIONS</p>
            <h1>Publications</h1>
            <p className="publications-description">
              Complete list of research publications.
            </p>
          </div>

          <div className="publications-table-card">
            <div className="table-responsive">
              <table className="publications-table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Title of Publication</th>
                    <th>Authors</th>
                    <th>Publication / Journal / Conference</th>
                    <th>Year</th>
                    <th>DOI / Link</th>
                  </tr>
                </thead>

                <tbody>
                  {publications.length > 0 ? (
                    publications.map((publication, index) => (
                      <tr key={`${publication.title}-${index}`}>
                        <td>{index + 1}</td>
                        <td>{publication.title}</td>
                        <td>{publication.authors}</td>
                        <td>{publication.source}</td>
                        <td>{publication.year}</td>
                        <td>
                          {publication.link ? (
                            <a
                              href={publication.link}
                              target="_blank"
                              rel="noreferrer"
                              className="publication-link"
                            >
                              View Publication
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="empty-publications">
                        Publication records can be added here without changing the portfolio content.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Publications;

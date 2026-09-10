import "./App.css";

const reviewedJournals = [
  {
    journal: "Journal Name 1",
    publisher: "Publisher Name",
    issn: "XXXX-XXXX",
    role: "Reviewer",
    year: "2025",
    link: "#",
  },
  {
    journal: "Journal Name 2",
    publisher: "Publisher Name",
    issn: "XXXX-XXXX",
    role: "Reviewer",
    year: "2024",
    link: "#",
  },
];

function JournalReviewer({ onBack }) {
  return (
    <div className="publications-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar publications-navbar">
        <div className="container nav-container">

          <button
            type="button"
            className="logo publication-logo"
            onClick={onBack}
          >
            Deepak<span>.</span>
          </button>

          <button
            type="button"
            className="back-button"
            onClick={onBack}
          >
            ← Back to Portfolio
          </button>

        </div>
      </nav>

      {/* ================= MAIN ================= */}

      <main className="publications-main">
        <div className="container">

          <div className="publications-header">
            <p>ACADEMIC SERVICE & PEER REVIEW</p>

            <h1>Journal Reviewer</h1>

            <p className="publications-description">
              Journals and publications for which I have contributed as a
              peer reviewer.
            </p>
          </div>

          {/* ================= REVIEWER TABLE ================= */}

          <div className="publications-table-card">

            <div className="table-responsive">

              <table className="publications-table">

                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Journal Name</th>
                    <th>Publisher</th>
                    <th>ISSN</th>
                    <th>Role</th>
                    <th>Year</th>
                    <th>Link</th>
                  </tr>
                </thead>

                <tbody>
                  {reviewedJournals.length > 0 ? (

                    reviewedJournals.map((journal, index) => (
                      <tr
                        key={`${journal.journal}-${index}`}
                      >
                        <td>{index + 1}</td>

                        <td>{journal.journal}</td>

                        <td>{journal.publisher}</td>

                        <td>{journal.issn}</td>

                        <td>{journal.role}</td>

                        <td>{journal.year}</td>

                        <td>
                          {journal.link ? (
                            <a
                              href={journal.link}
                              target="_blank"
                              rel="noreferrer"
                              className="publication-link"
                            >
                              View Journal
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>
                      </tr>
                    ))

                  ) : (

                    <tr>
                      <td
                        colSpan="7"
                        className="empty-publications"
                      >
                        Journal reviewer records can be added here
                        without changing the portfolio content.
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

export default JournalReviewer;


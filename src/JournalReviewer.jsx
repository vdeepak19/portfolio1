import "./JournalReviewer.css";

const reviewedJournals = [
  {
    journal: "Neural Processing Letters",
    publisher: "Springer Nature",
    issn: "0893-6080",
    role: "Reviewer",
    year: "2025",
    link: "https://link.springer.com/journal/11063",
  },
  {
    journal: "Discover Computing",
    publisher: "Springer Nature",
    issn: "2948-3007",
    role: "Reviewer",
    year: "2025",
    link: "https://link.springer.com/journal/10791",
  },
  {
    journal: "Wireless Personal Communications",
    publisher: "Springer Nature",
    issn: "0929-6212",
    role: "Reviewer",
    year: "2025",
    link: "https://link.springer.com/journal/11277",
  },
  {
    journal: "Journal of Big Data",
    publisher: "Springer Nature",
    issn: "2196-1115",
    role: "Reviewer",
    year: "2025",
    link: "https://journalofbigdata.springeropen.com/",
  },
  {
    journal: "SN Computer Science",
    publisher: "Springer Nature",
    issn: "2661-8907",
    role: "Reviewer",
    year: "2025",
    link: "https://link.springer.com/journal/42979",
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
            aria-label="Back to portfolio"
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
          {/* ================= HEADER ================= */}
          <div className="publications-header">
            <p>ACADEMIC SERVICE &amp; PEER REVIEW</p>

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
                        <td data-label="S.No.">
                          {index + 1}
                        </td>

                        <td
                          data-label="Journal Name"
                          className="journal-name"
                        >
                          {journal.journal}
                        </td>

                        <td data-label="Publisher">
                          {journal.publisher}
                        </td>

                        <td data-label="ISSN">
                          {journal.issn}
                        </td>

                        <td data-label="Role">
                          <span className="reviewer-badge">
                            {journal.role}
                          </span>
                        </td>

                        <td data-label="Year">
                          {journal.year}
                        </td>

                        <td data-label="Link">
                          {journal.link ? (
                            <a
                              href={journal.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="publication-link"
                            >
                              View Journal ↗
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

          {/* ================= FOOTNOTE ================= */}
          <div className="reviewer-note">
            <p>
              <strong>Academic Service:</strong> Peer reviewer for
              international journals covering areas of computer
              science, artificial intelligence, big data, networking,
              and related technologies....
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default JournalReviewer;
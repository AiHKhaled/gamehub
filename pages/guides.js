import { useEffect, useContext, useState } from "react";
import AuthContext from "../stores/authContext";
import styles from "../styles/Guides.module.css";

export default function Guides() {
  const { user, authready } = useContext(AuthContext);
  const [guides, setGuides] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (authready) {
      fetch(
        "/.netlify/functions/guides",
        user && {
          headers: {
            Authorization: `Bearer ${user.token.access_token}`,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("You must be logged in to view this content");
          }
          return res.json();
        })
        .then((data) => {
          setGuides(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setGuides(null);
        });
    }
  }, [user, authready]);

  return (
    <div className={styles.guides}>
      {!authready && <div> you must be logged in to view this content</div>}
      {error && <div className={styles.error}>{error}</div>}
      <h2>All Guides</h2>

      {guides &&
        guides.map((guide, i) => (
          <div className={styles.card} key={i}>
            <h2> {guide.title} </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              recusandae doloremque quam repellendus doloribus ex nulla, id
              veniam vitae totam officia adipisci magni architecto, et fugit
              quos vero. Eius, dolor?{" "}
            </p>
            <h4>
              {" "}
              Written by <span>{guide.author}</span>{" "}
            </h4>
          </div>
        ))}
    </div>
  );
}

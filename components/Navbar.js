import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function Navbar() {
  const { user, login, logout, authready } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} />
        <h1>Gaming Vibes</h1>
        {authready && (
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/guides">
                <a>Guides</a>
              </Link>
            </li>
            {!user && (
              <li onClick={login} className="btn">
                Login/Signup
              </li>
            )}

            {user && (
              <li onClick={logout} className="btn">
                Log out
              </li>
            )}
            {user && (
              <li>
                <span> {user.user_metadata.full_name} </span>
              </li>
            )}
          </ul>
        )}
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} />
      </div>
    </div>
  );
}

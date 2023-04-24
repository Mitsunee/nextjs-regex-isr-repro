import Link from "next/link";
import { cc } from "./cc";
import styles from "./Navigation.module.css"
import { useRouter } from "next/router";
import ErrorBoundary from "./ErrorBoundary";

const Routes = [
  {path: "/", text: "Home", reg: /^\/$/},
  {path: "/ssg-test", text: "With SSG", reg: /^\/ssg-test\/?/},
  {path: "/isr-test", text: "With ISR", reg: /^\/isr-test\/?/}
] as const;

export function Navigation() {
  const router = useRouter();

  return (
    <ErrorBoundary name="Navigation">
      <nav className={styles.nav}>
        <ul>
          {Routes.map(route => {
            const isActive = route.reg.test(router.route);

            return (
              <ErrorBoundary li name={route.text} key={route.path}>
                <li>
                  <Link
                    href={route.path}
                    className={cc([styles.link, isActive && styles.active])}>
                    {route.text}
                  </Link>
                </li>
              </ErrorBoundary>
            )
          })}
        </ul>
      </nav>
    </ErrorBoundary>
  )
}
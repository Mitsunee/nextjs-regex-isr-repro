import { useErrorStore } from "./ErrorBoundary";
import styles from "./DebugOutput.module.css";

export function DebugOutput() {
  const errors = useErrorStore();

  return (
    <footer className={styles.debug}>
      {errors.length > 0 ? (
        <ul>
          {errors.map(([name, text]) => (
            <li key={name}><b>{name}:</b> {text}</li>
          ))}
        </ul>
      ) : "no errors caught"}
    </footer>
  )
}
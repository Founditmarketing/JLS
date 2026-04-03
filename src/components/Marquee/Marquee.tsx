import styles from './Marquee.module.css';

const items = [
  "Custom Pool Construction",
  "Landscape Design",
  "Irrigation Systems",
  "Outdoor Living Spaces",
  "Fencing & Hardscapes",
  "Pool Maintenance",
  "Landscape Lighting",
  "North Texas & Southern Oklahoma"
];

export default function Marquee() {
  return (
    <div className={styles.marq}>
      <div className={styles.marqTrack}>
        {[...items, ...items, ...items].map((item, idx) => (
          <span key={idx} className={styles.marqItem}>
            {item} <span className={styles.marqDot}></span>
          </span>
        ))}
      </div>
    </div>
  );
}

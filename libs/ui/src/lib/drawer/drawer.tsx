import styles from './drawer.module.css';

/* eslint-disable-next-line */
export interface DrawerProps {}

export function Drawer(props: DrawerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Drawer!</h1>
    </div>
  );
}

export default Drawer;

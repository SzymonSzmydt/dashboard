import burg from './style/burg.module.css';

type BurgProps = {
  handleClick: () => void;
  isClicked: boolean;
};

export function Hamburger({ handleClick, isClicked }: BurgProps) {
  const isBurgerClicked = isClicked ? burg.burgerOn : burg.burger;
  return (
    <div className={isBurgerClicked} onClick={handleClick}>
      <span className={burg.line} />
      <span className={burg.line} />
      <span className={burg.line} />
    </div>
  );
}

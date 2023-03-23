import btn from './style/btn.module.css';

type VariantProps = {
  handleClick?: () => void;
  name: string;
};

export function Variant({ name, handleClick }: VariantProps) {
  return (
    <button className={btn.variant} onClick={handleClick}>
      {name}
    </button>
  );
}

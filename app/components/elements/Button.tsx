// src/components/elements/Button.tsx
import type { JSX } from "react";
import Link from "next/link";

interface ButtonProps {
  text?: string;
  variant?: string;
  size?: string;
  disabled?: boolean;
  icon?: string;
  fit?: boolean;
  to?: string;
  href?: string;
  isPaginationPage?: boolean; // 페이지네이션 버튼 여부를 나타내는 새로운 prop
}

function Button({ 
  text = "Button", 
  variant = '', 
  size = '', 
  disabled = false, 
  icon = '', 
  fit = false, 
  to = '', 
  href = '',
  isPaginationPage = false, // 기본값은 false
}: ButtonProps): JSX.Element {

  // 클래스명 동적 생성
  const classNames = [
    isPaginationPage ? 'page' : 'button', // 페이지네이션 버튼이면 'page', 아니면 'button'
    // 페이지네이션 버튼의 'primary' variant는 'active' 클래스로 매핑
    isPaginationPage && variant === 'primary' ? 'active' : (!isPaginationPage ? variant : ''),
    size,    // small, large 등
    fit ? 'fit' : '',
    icon ? `icon solid ${icon}` : '',
    disabled ? 'disabled' : ''
  ].filter(Boolean).join(' ');

  // disabled 상태일 경우 <span> 태그를 사용하며, 페이지네이션 버튼이면 'page disabled' 클래스를 가집니다.
  if (disabled) {
    const disabledClassNames = [isPaginationPage ? 'page' : 'button', 'disabled'].filter(Boolean).join(' ');
    return <span className={disabledClassNames}>{text}</span>;
  }

  // to prop이 있으면 Link 컴포넌트, href prop이 있으면 <a> 태그, 둘 다 없으면 <button> 태그 반환
  if (to) return <Link href={to} className={classNames}>{text}</Link>;
  if (href) return <a href={href} className={classNames}>{text}</a>;

  return (
    <button className={classNames} disabled={disabled}>{text}</button>
  );
}

export default Button;
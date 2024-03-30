import React, { CSSProperties, PropsWithChildren } from 'react';
import * as S from './Flex.style';

// CSSProperties에서 지정된 속성 중에서 일부 속성만을 선택적으로 포함하는 타입을 생성
export type PickCSSProperties<Properties extends keyof CSSProperties> = Partial<
  Pick<CSSProperties, Properties>
>;

export interface FlexProps
  extends PickCSSProperties<
    | 'display'
    | 'flex' // flex-grow, flex-shrink, flex-basis의 단축 속성
    | `flex${'Wrap' | 'Basis' | 'Grow' | 'Shrink' | 'Direction'}` // flex-wrap, flex-basis, flex-grow, flex-shrink, flex-direction의 속성을 선택
    | `align${'Items' | 'Content' | 'Self'}`
    | 'justifyContent'
    | 'gap'
  > {
  width?: number;
  height?: number;
}

const Flex = ({
  width,
  height,
  children,
  ...flexProps
}: PropsWithChildren<FlexProps>) => {
  return (
    <S.FlexContainer style={{ width, height, ...flexProps }}>
      {children}
    </S.FlexContainer>
  );
};

export default Flex;

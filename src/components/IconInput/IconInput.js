import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];

  // TODO: validate size

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={2} />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          "--width": width + "px",
          "--height": styles.height / 16 + "rem",
          "--border-thickness": styles.borderThickness + "px",
          "--font-size": styles.fontSize / 16 + "rem",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

/**
 * Variant below using Composition
 */
// const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
//   const iconSize = size === "small" ? 16 : 24;
//   const Input = size === "small" ? SmallInput : LargeInput;

//   return (
//     <Wrapper>
//       <IconWrapper style={{ "--size": iconSize + "px" }}>
//         <Icon id={icon} size={iconSize} strokeWidth={2} />
//       </IconWrapper>
//       <Input
//         {...delegated}
//         style={{
//           "--width": width + "px",
//         }}
//       />
//     </Wrapper>
//   );
// };

// const Wrapper = styled.label`
//   display: block;
//   position: relative;
//   color: ${COLORS.gray700};

//   &:hover {
//     color: ${COLORS.black};
//   }
// `;

// const IconWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   margin: auto 0;
//   height: var(--size);
// `;

// const TextInput = styled.input`
//   width: var(--width);
//   border: none;
//   color: inherit;
//   font-weight: 700;
//   outline-offset: 2px;

//   &::placeholder {
//     font-weight: 400;
//     color: ${COLORS.gray500};
//   }
// `;

// const SmallInput = styled(TextInput)`
//   height: 24px;
//   font-size: ${14 / 16}rem;
//   border-bottom: 1px solid ${COLORS.black};
//   padding-left: 24px;
// `;

// const LargeInput = styled(TextInput)`
//   height: 36px;
//   font-size: ${18 / 16}rem;
//   border-bottom: 2px solid ${COLORS.black};
//   padding-left: 36px;
// `;

export default IconInput;

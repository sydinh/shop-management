import styled from 'styled-components';

export const Section = styled.section.attrs({
  className: props => props.product ? 'section-product' : '' ,
})`
  width: 50%;
  margin: 1.25rem auto 0;
  padding: 1.25rem;
  text-align: left;
  border: 1px solid #c2c2c2;
`;

export const SectionInner = styled.div`
  margin: 1.25rem 0;
`;

export const ProductImageUploadLabel = styled.label.attrs({
  className: 'pt-label',
  htmlFor: '',
})``;

export const ProductInput = styled.input`
  width: 100%;
`;

export const ProductTextarea = styled.textarea`
  width: 100%;
`;

export const ProductImageUploadInput = styled.label.attrs({
  className: 'pt-file-upload',
})`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin-top: 0.625rem;
`;

export const SubmitButton = styled.button.attrs({
  className: 'pt-button pt-intent-primary',
  type: 'submit',
})``;

export const ResetButton = styled.button.attrs({
  className: 'pt-button',
  type: 'reset',
})``;

import styled from 'styled-components';


const ProfileInput = styled.section`
  width: 100%;
  padding: 2rem 1rem;
`


const Fieldsets = styled.fieldset`
  border:none;
  margin:1rem 0;
  input {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: var(--font-size-xxs);
    border:none;
    border-bottom:1px solid #333;
    &:focus {
      outline: none;
      border-bottom:1px solid var(--color-primary);
        ::placeholder {
        }
      }
      &:active {
        background: none;
      }
    }
    label {
      color: var(--color-dark);
      font-weight:500;
      font-size: var(--font-size-micro);
    }
`

const ProfileImg = styled.article`
  width: min(10rem, 30vw ,12rem);
  height: min(10rem, 30vw ,12rem);
  border-radius: 50%;
  margin: 2rem auto ;
  position: relative;
  border:1px solid var(--color-light);
  img {
    width: 100%;
  }
  input[type="file"] {
    position: absolute;
    width: 3rem;
    height: 3rem;
    background: var(--color-primary) center/1.5rem no-repeat;
    background-image: url(${(props) => props.icon});

    right: -1rem;
    bottom: -1rem;
    border-radius: 50%;
    color: rgba(0, 0, 0, 0);

    ::file-selector-button {
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
      width: 1px;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
    }
  }
`

export {
  ProfileInput,
  Fieldsets,
  ProfileImg
}
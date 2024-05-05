import styled from "styled-components";

export const FileInput = styled.input`
  display: none;
`;

export const FileName = styled.span`
  margin-left: 1rem;
`;

export const AllowedFileTypes = [
  "application/pdf",
  "application/msword",
  "video/mp4",
  "audio/mpeg",
  "audio/wav",
  "audio/x-m4a",
];

// Container for drag and drop area and buttons
export const DragDropContainer = styled.div`
  position: relative;
`;

// Drag and drop area
export const DragDropArea = styled.div`
  border: 2px dashed #ccc;
  border-radius: 5px;
  padding: 40px;
  text-align: center;
  transition: border-color 0.3s ease;
  margin-bottom: 20px;
  height: 200px;

  &:hover {
    border-color: #666;
  }

  &:active {
    border-style: solid; 
  }


  p {
    margin: 0;
    font-size: 16px;
    color: #666;
  }


  svg {
    margin-bottom: 10px;
    fill: #666;
    width: 48px;
    height: 48px;
    transition: fill 0.3s ease; 
  }

  &:hover svg {
    fill: #333;
  }
`;

// Upload button
export const SelectFileButton = styled.label`
  background-color: transparent;
  border: 2px solid #fff;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
`;

// Start upload button
export const StartUploadButton = styled.label`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

// Success message
export const SuccessMessage = styled.div`
  color: green;
  margin-top: 0.5rem;
`;

// Results
export const Results = styled.div`
  margin-top: 20px;
  text-align: center;
`;

// Options Container
export const OptionsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  width: 300px;
`;

// Options Button
export const OptionButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textColor};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

// Back button styled component
export const BackButton = styled.button`
  position: absolute;
  top: 70px;
  left: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textColor};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

//Result Container
export const HeaderContainer = styled.div`
  position: absolute;
  top: 20.14%;
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 100%;
  text-transform: capitalize;
  width: 400px;
`;

// Paragraph Container
export const ParagraphContainer = styled.div`
  position: absolute;
  top: calc(20.14% + 70px + 20px); /* Header height + margin */
  bottom: 80px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  overflow-y: scroll;
  height: auto;
  max-height: 700px;
  max-width: 90%;
`;

// Button Container
export const ButtonContainer = styled.div`
  position: absolute;
  left: calc(13.12% + 300px + 20px); 
  top: calc(
    50.14% + 70px + 20px + 28px + 20px
  ); 
  display: flex;
  font-size: 18px;
  gap: 10px; 
`;

// Button styled component
export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textColor};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 20px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.textColor};
    border: solid;
  }
`;

// Button Container
export const ResultsButtonContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  right: 40px; 
  bottom: 1px
  justify-content: flex-end; 
  top: 23.14%;
`;

export const ResultsContainer = styled.div`
  display: flex;
  gap: 10px;
  bottom: 20px;
  left: 50px; 
  right: 50px; 
  overflow-y: scroll;
  height: auto;
  max-height: 100px;
  max-width: 80%;
`;

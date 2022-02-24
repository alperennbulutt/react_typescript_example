import TextareaAutosize from '@mui/material/TextareaAutosize';

interface IMaxHeightTextarea {
  placeholder: string;
  width?: string;
  maxRows?: number;
  minRows?: number;
  textColor?: string;
}

export default function MaxHeightTextarea(props: IMaxHeightTextarea) {
  return (
    <TextareaAutosize
      maxRows={props.maxRows === null ? 20 : props.maxRows}
      minRows={props.minRows === null ? 20 : props.minRows}
      aria-label="maximum height"
      placeholder={props.placeholder}
      title="denemeeee"
      style={{
        width: props.width,
        color: props.textColor === undefined ? 'red' : props.textColor
      }}
    />
  );
}

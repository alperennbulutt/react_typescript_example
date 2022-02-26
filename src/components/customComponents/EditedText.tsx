import React, { useState } from 'react';

interface IEditedText {
  data?: String;
}

export default function EditedText(props: IEditedText) {
  console.log('buna dogru', props.data);
  return <div>{props.data === undefined ? 'veri yok' : props.data}</div>;
}

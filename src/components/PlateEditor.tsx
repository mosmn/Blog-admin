"use client";

import {
  Plate,
} from "@udecode/plate-common";
import {
  CommentsProvider,
} from "@udecode/plate-comments";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { MentionCombobox } from "@/components/plate-ui/mention-combobox";
import { CommentsPopover } from "@/components/plate-ui/comments-popover";
import { Editor } from "@/components/plate-ui/editor";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons";
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons";
import { useEffect } from "react";
import plugins from "./plugins";

const initialValue = [
  {
    type: "paragraph",
    children: [
      { text: "This is editable " },
      { text: "rich", bold: true },
      { text: " text, " },
      { text: "much", italic: true },
      { text: " better than a " },
      { text: "<textarea>", code: true },
      { text: "!" },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text " +
          "bold, or add a semantically rendered block quote in the middle of the page, like this:",
      },
    ],
  },
  {
    type: "block-quote",
    children: [{ text: "A wise quote." }],
  },
  {
    type: "paragraph",
    children: [{ text: "Try it out for yourself!" }],
  },
];

import styled from 'styled-components';

const ToolbarStyle = styled.div`
button {
  background-color: transparent;
  border: 1px solid #231F20;
  cursor: pointer;
  min-width: 20px;
}
`;

export function PlateEditor({
  setValue,
  value,
}: {
  setValue: Function;
  value: any;
}) {

  useEffect(() => {
    if (value.length === 0) {
      setValue(JSON.stringify(initialValue, null, 2));
    } else {
      setValue(JSON.stringify(value, null, 2));
    }
  }
  , []);

  const handleOnChange = (
    value: { id: string; type: string; children: { text: string }[] }[],
  ) => {
    const content = JSON.stringify(value, null, 2);
    setValue(content);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <CommentsProvider users={{}} myUserId="1">
        <Plate plugins={plugins} initialValue={value.length === 0 ? initialValue : value} onChange={handleOnChange}>
          
          <FixedToolbar>
            <FixedToolbarButtons />
          </FixedToolbar>
          

          <Editor />

          <FloatingToolbar>
          
            <FloatingToolbarButtons />
            
          </FloatingToolbar>
          <MentionCombobox items={[]} />
          <CommentsPopover />
        </Plate>
      </CommentsProvider>
    </DndProvider>
  );
}

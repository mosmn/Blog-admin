import React from "react";
import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import { useEditorReadOnly } from "@udecode/plate-common";

import { Icons } from "@/components/icons";

import { MarkToolbarButton } from "./mark-toolbar-button";
import { MoreDropdownMenu } from "./more-dropdown-menu";
import { TurnIntoDropdownMenu } from "./turn-into-dropdown-menu";
import styled from "styled-components";

const ToolbarItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #231f20;
    color: white;
    border-radius: 0.25rem;
    cursor: pointer;
    min-width: 80px;

    &:hover {
      background-color: #ded9d3;
      color: #231f20;
    }

    @media (max-width: 768px) {
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;

      min-width: 70px;
    }
  }
`;

export function FloatingToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <ToolbarItems>
      {!readOnly && (
        <>
          <TurnIntoDropdownMenu />

          <MarkToolbarButton nodeType={MARK_BOLD} tooltip="Bold (⌘+B)">
            <Icons.bold />
          </MarkToolbarButton>
          <MarkToolbarButton nodeType={MARK_ITALIC} tooltip="Italic (⌘+I)">
            <Icons.italic />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={MARK_UNDERLINE}
            tooltip="Underline (⌘+U)"
          >
            <Icons.underline />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={MARK_STRIKETHROUGH}
            tooltip="Strikethrough (⌘+⇧+M)"
          >
            <Icons.strikethrough />
          </MarkToolbarButton>
          <MarkToolbarButton nodeType={MARK_CODE} tooltip="Code (⌘+E)">
            <Icons.code />
          </MarkToolbarButton>
        </>
      )}

      <MoreDropdownMenu />
    </ToolbarItems>
  );
}

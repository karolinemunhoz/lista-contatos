import styled from "styled-components";

export const Card = styled.div`
  background: white;
  padding: 18px;
  border-radius: 12px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

export const Name = styled.h3`
  margin: 0 0 8px;
  font-weight: 600;
`;

export const Info = styled.p`
  margin: 4px 0;
  color: #6b7280;
`;

export const Actions = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
`;

export const EditBtn = styled.button`
  background: #f59e0b;
  color: white;
`;

export const DeleteBtn = styled.button`
  background: #ef4444;
  color: white;
`;

export const SaveBtn = styled.button`
  background: #10b981;
  color: white;
`;

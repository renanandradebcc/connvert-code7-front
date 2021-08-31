import styled from "styled-components";

export const Container = styled.div`
    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            align-items: center;
            justify-content: space-between;

            &:first-child {
                color: var(--text-title);
            }

            button {
                border: none;
                background: transparent;
            }
        }
    }
`;
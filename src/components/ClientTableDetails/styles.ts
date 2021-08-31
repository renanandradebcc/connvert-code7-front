import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;

    h2 {
        margin-left: 2rem;
        margin-top: 1rem;
    }

    span {
        display: flex;
        justify-content: center;
        align-self: center;

        margin-top: 8rem;
    }
    
    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        margin-top: 1rem;

        td.tdspacebutton {
            display: flex;
            align-items: flex-end;
        }

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
`
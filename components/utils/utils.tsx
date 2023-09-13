export const Executor = (
    Exec: () => void,
    timeout: number,
) => {
    setTimeout(Exec, timeout);
};

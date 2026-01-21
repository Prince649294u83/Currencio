type Props = {
    from: string;
    to: string;
};

function CurrencyContext({ from, to }: Props) {
    return (
        <>
            <h3>Currency Context</h3>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div>
                    <strong>{from}</strong>
                    <p>
                        The {from} is a globally traded currency commonly used
                        in international transactions.
                    </p>
                </div>

                <div>
                    <strong>{to}</strong>
                    <p>
                        The {to} is widely used in regional and global markets
                        and plays a key economic role.
                    </p>
                </div>
            </div>
        </>
    );
}

export default CurrencyContext;

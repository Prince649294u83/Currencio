function ConversionHistory() {
    return (
        <>
            <h3>Conversion History</h3>

            <table style={{ width: "100%", marginTop: 12 }}>
                <thead>
                <tr style={{ textAlign: "left", opacity: 0.6 }}>
                    <th>Time</th>
                    <th>From → To</th>
                    <th>Result</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>10:24</td>
                    <td>1.00 USD → EUR</td>
                    <td><strong>0.91</strong></td>
                </tr>
                </tbody>
            </table>
        </>
    );
}

export default ConversionHistory;

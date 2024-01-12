<form action="receive.php" method="GET">
    <div>
        <input type="text" name="members[]">
    </div>
    <div>
        <input type="text" name="members[]">
    </div>
    <div>
        <input type="text" name="members[]">
    </div>
    <input type="submit" value="配列を送信">
</form>
<form action="receive.php" method="GET">
    <div>
        <input type="text" name="account[id]">
    </div>
    <div>
        <input type="text" name="account[name]">
    </div>
    <div>
        <input type="text" name="account[pwd]">
    </div>
    <input type="submit" value="連想配列を送信">
</form>
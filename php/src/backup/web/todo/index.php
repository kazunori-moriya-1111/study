<?php
session_start();
$self_url = $_SERVER['PHP_SELF'];
?>

<form action="<?PHP echo $self_url; ?>" method="POST">
    <input type="text" name="title">
    <input type="submit" name="type" value="create">
</form>

<?PHP
if (isset($_POST['type'])) {
    if ($_POST['type'] === 'create') {
        $_SESSION['todos'][] = $_POST['title'];
        echo "新しいタスク[{$_POST['title']}]が追加されました";
    } else if ($_POST['type'] === 'update') {
        $_SESSION['todos'][$_POST['id']] = $_POST['title'];
        echo "新しいタスク[{$_POST['title']}]の名前が変更されました";
    } else if ($_POST['type'] === 'delete') {
        array_splice($_SESSION['todos'], $_POST['id'], 1);
        echo "新しいタスク[{$_POST['title']}]が削除されました";
    }
}
if (empty($_SESSION['todos'])) {
    $_SESSION['todos'] = [];
    echo 'タスクを入力しましょう';
    die();
}

?>

<ul>
    <?PHP for ($i = 0; $i < count($_SESSION['todos']); $i++) : ?>
        <li>
            <form action="<?PHP echo $self_url; ?>" method="POST">
                <input type="hidden" name="id" value="<?PHP echo $i; ?>">
                <input type="text" name="title" value="<?PHP echo $_SESSION['todos'][$i]; ?>">
                <input type="submit" name="type" value="delete">
                <input type="submit" name="type" value="update">
            </form>
        </li>
    <?php endfor; ?>
</ul>
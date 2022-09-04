-- CREATE USER 'user'@'%'; compose.ymlのenvironmentで作成されている
GRANT ALL PRIVILEGES ON . TO 'user'@'%';
FLUSH PRIVILEGES;
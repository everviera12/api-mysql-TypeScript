-- sp to see all of users
DELIMITER //
  CREATE PROCEDURE verUsuarios() 
    BEGIN 
	    SELECT * FROM usuarios;
	  END // 
DELIMITER;

-- sp to show specific user
DELIMITER //
CREATE PROCEDURE verUsuarioId(IN p_id INT)
BEGIN
    SELECT * FROM usuarios WHERE id_usuario = p_id;
END //
DELIMITER ;

-- sp to add user
DELIMITER // 
  CREATE PROCEDURE insertUsuarios(
    IN p_name VARCHAR(50),
    IN p_middle_name VARCHAR(20),
    IN p_last_name VARCHAR(20),
    IN p_phone VARCHAR(20),
    IN p_email VARCHAR(100),
    IN p_password VARCHAR(20),
    IN p_user_name VARCHAR(50)
  ) 
    BEGIN
      INSERT INTO  usuarios (name, middle_name, last_name, phone, email, password, user_name) 
      VALUES(p_name, p_middle_name, p_last_name, p_phone, p_email, p_password, p_user_name);
    END //
DELIMITER ;

-- sp to update users
DELIMITER //
  CREATE PROCEDURE updateUsuarios(
    IN p_id_usuario INT,
    IN p_name VARCHAR(50),
    IN p_middle_name VARCHAR(20),
    IN p_last_name VARCHAR(20),
    IN p_phone VARCHAR(20),
    IN p_email VARCHAR(100),
    IN p_password VARCHAR(20),
    IN p_user_name VARCHAR(50)
  )
    BEGIN
      UPDATE usuarios 
        SET name = p_name,
            middle_name = p_middle_name,
            last_name = p_last_name,
            phone = p_phone,
            email = p_email,
            password = p_password,
            user_name = p_user_name
        WHERE id_usuario = p_id_usuario;
    END //
DELIMITER ;



-- sp to delete users
DELIMITER // 
  CREATE PROCEDURE deleteUsuario( 
    IN p_id_usuario INT
  )
    BEGIN 
    DELETE FROM usuarios WHERE id_usuario = p_id_usuario; 
    END //
DELIMITER ;
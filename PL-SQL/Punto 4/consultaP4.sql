-- tabla piloto
CREATE TABLE piloto (
  id NUMBER(10) PRIMARY KEY,
  usuario VARCHAR2(50),
  contraseña VARCHAR2(50),
  estado VARCHAR2(10) CHECK (estado IN ('activo', 'inactivo'))
);

-- Creacion del procedimiento almacenado
CREATE OR REPLACE PROCEDURE gestionar_piloto(
  p_usuario IN VARCHAR2,
  p_contraseña IN VARCHAR2,
  p_estado IN VARCHAR2,
  p_id IN NUMBER DEFAULT NULL
)
IS
BEGIN
  -- Inserción
  IF p_id IS NULL THEN
    INSERT INTO piloto (usuario, contraseña, estado)
    VALUES (p_usuario, p_contraseña, p_estado);
  -- Actualización
  ELSIF p_id IS NOT NULL AND p_estado = 'activo' THEN
    UPDATE piloto
    SET usuario = p_usuario, contraseña = p_contraseña
    WHERE id = p_id;
  -- Cambio de estado a inactivo
  ELSIF p_id IS NOT NULL AND p_estado = 'inactivo' THEN
    UPDATE piloto
    SET estado = 'inactivo'
    WHERE id = p_id;
  END IF;
END gestionar_piloto;
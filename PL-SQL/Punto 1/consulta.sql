CREATE OR REPLACE FUNCTION OBTENER_CANTIDAD_PACIENTES(fecha_inicio DATE, fecha_fin DATE) RETURN NUMBER IS
    cantidad_pacientes NUMBER;
BEGIN
    SELECT COUNT(*)
    INTO cantidad_pacientes
    FROM pacientes
    WHERE estado = 'ACTIVO'
    AND (fechacreacion BETWEEN NVL(fecha_inicio, fechacreacion) AND NVL(fecha_fin, fecha_fin))
    AND (fecha_inicio IS NULL OR fecha_fin IS NULL OR fecha_inicio <= fecha_fin);

    IF fecha_inicio IS NULL AND fecha_fin IS NULL THEN
        DBMS_OUTPUT.PUT_LINE('Cantidad total de pacientes: ' || cantidad_pacientes);
    ELSIF fecha_fin IS NULL THEN
        DBMS_OUTPUT.PUT_LINE('Cantidad de pacientes desde la fecha inicial: ' || cantidad_pacientes);
        SELECT nombre1 || ' ' || nombre2 || ' ' || apellido1 || ' ' || apellido2
        FROM pacientes
        WHERE estado = 'ACTIVO'
        AND fechacreacion >= fecha_inicio;
    ELSIF fecha_inicio IS NULL THEN
        DBMS_OUTPUT.PUT_LINE('Cantidad de pacientes hasta la fecha final: ' || cantidad_pacientes);
        SELECT nombre1 || ' ' || nombre2 || ' ' || apellido1 || ' ' || apellido2
        FROM pacientes
        WHERE estado = 'ACTIVO'
        AND fechacreacion <= fecha_fin;
    ELSE
        DBMS_OUTPUT.PUT_LINE('Cantidad de pacientes en el rango de fechas: ' || cantidad_pacientes);
        SELECT nombre1 || ' ' || nombre2 || ' ' || apellido1 || ' ' || apellido2
        FROM pacientes
        WHERE estado = 'ACTIVO'
        AND fechacreacion BETWEEN fecha_inicio AND fecha_fin;
    END IF;

    RETURN cantidad_pacientes;
END OBTENER_CANTIDAD_PACIENTES;
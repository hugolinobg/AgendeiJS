--
-- Arquivo gerado com SQLiteStudio v3.4.4 em seg jan 6 11:00:28 2025
--
-- Codificação de texto usada: UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Tabela: admins
CREATE TABLE IF NOT EXISTS admins (
    id_admin   INTEGER       PRIMARY KEY AUTOINCREMENT,
    name       VARCHAR (50),
    email      VARCHAR (100),
    password   VARCHAR (100),
    created_at TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME      DEFAULT CURRENT_TIMESTAMP
);


-- Tabela: appointments
CREATE TABLE IF NOT EXISTS appointments (
    id_appointment INTEGER     PRIMARY KEY AUTOINCREMENT,
    id_doctor      INTEGER,
    id_service     INTEGER,
    id_user        INTEGER,
    booking_date   DATE,
    booking_hour   VARCHAR (5),
    created_at     TIMESTAMP   DEFAULT CURRENT_TIMESTAMP,
    updated_at     DATETIME    DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (
        id_doctor
    )
    REFERENCES doctors (id_doctor),
    FOREIGN KEY (
        id_service
    )
    REFERENCES services (id_service),
    FOREIGN KEY (
        id_user
    )
    REFERENCES users (id_user) 
);

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour,
                             created_at,
                             updated_at
                         )
                         VALUES (
                             21,
                             1,
                             1,
                             1,
                             '2024-11-29',
                             '11:00',
                             '2024-11-01 17:05:11',
                             '2024-11-01 17:05:11'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour,
                             created_at,
                             updated_at
                         )
                         VALUES (
                             22,
                             7,
                             4,
                             1,
                             '2024-11-14',
                             '16:30',
                             '2024-11-01 17:06:41',
                             '2024-11-01 17:06:41'
                         );

INSERT INTO appointments (
                             id_appointment,
                             id_doctor,
                             id_service,
                             id_user,
                             booking_date,
                             booking_hour,
                             created_at,
                             updated_at
                         )
                         VALUES (
                             23,
                             7,
                             1,
                             1,
                             '2024-11-13',
                             '19:00',
                             '2024-11-02 11:45:11',
                             '2024-11-02 11:45:11'
                         );


-- Tabela: doctors
CREATE TABLE IF NOT EXISTS doctors (
    id_doctor  INTEGER      PRIMARY KEY AUTOINCREMENT,
    name       VARCHAR (50),
    specialty  VARCHAR (50),
    icon       VARCHAR (10),
    created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME     DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon,
                        created_at,
                        updated_at
                    )
                    VALUES (
                        1,
                        'Dr. Armando Matheus',
                        'Ginecologia e Obstetrícia',
                        'M',
                        '2024-10-25 13:47:52',
                        '2024-10-25 10:47:52'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon,
                        created_at,
                        updated_at
                    )
                    VALUES (
                        2,
                        'Dra. Ana Beatriz Rutini',
                        'Cardiologista',
                        'F',
                        '2024-10-25 13:47:52',
                        '2024-10-25 10:47:52'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon,
                        created_at,
                        updated_at
                    )
                    VALUES (
                        3,
                        'Dr. Antônio Almeida Souza',
                        'Pediatria',
                        'M',
                        '2024-10-25 13:47:52',
                        '2024-10-25 10:47:52'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon,
                        created_at,
                        updated_at
                    )
                    VALUES (
                        4,
                        'Dra. Roberta Martins',
                        'Clínica Geral',
                        'F',
                        '2024-10-25 13:47:52',
                        '2024-10-25 10:47:52'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon,
                        created_at,
                        updated_at
                    )
                    VALUES (
                        5,
                        'Dra. Nise da Silveira',
                        'Cirurgia Plástica',
                        'F',
                        '2024-10-25 13:47:52',
                        '2024-10-25 10:47:52'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon,
                        created_at,
                        updated_at
                    )
                    VALUES (
                        6,
                        'Dr. Jonatan Silvestre',
                        'Pediatria',
                        'M',
                        '2024-10-25 13:47:52',
                        '2024-10-25 10:47:52'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon,
                        created_at,
                        updated_at
                    )
                    VALUES (
                        7,
                        'Dr. Adriano Melo',
                        'Clínica Geral',
                        'M',
                        '2024-10-25 13:47:52',
                        '2024-10-25 10:47:52'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon,
                        created_at,
                        updated_at
                    )
                    VALUES (
                        8,
                        'Dr. José Eduardo Souza',
                        'Clínica Geral',
                        'M',
                        '2024-10-25 13:47:52',
                        '2024-10-25 10:47:52'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon,
                        created_at,
                        updated_at
                    )
                    VALUES (
                        9,
                        'Dra. Valeria Petri',
                        'Cirurgia Plástica',
                        'F',
                        '2024-10-25 13:47:52',
                        '2024-10-25 10:47:52'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon,
                        created_at,
                        updated_at
                    )
                    VALUES (
                        10,
                        'Dr. Hugolino B. Guimarães',
                        'Cardiologista',
                        'M',
                        '2024-10-28 12:49:00',
                        '2024-10-28 12:49:00'
                    );

INSERT INTO doctors (
                        id_doctor,
                        name,
                        specialty,
                        icon,
                        created_at,
                        updated_at
                    )
                    VALUES (
                        12,
                        'Dr. João Vitor Gomes de Andrade',
                        'Pediatria',
                        'M',
                        '2024-10-28 18:30:32',
                        '2024-10-28 18:30:32'
                    );


-- Tabela: doctors_services
CREATE TABLE IF NOT EXISTS doctors_services (
    id_doctor_service INTEGER        PRIMARY KEY AUTOINCREMENT,
    id_doctor         INTEGER,
    id_service        INTEGER,
    price             DECIMAL (9, 2),
    created_at        TIMESTAMP      DEFAULT CURRENT_TIMESTAMP,
    updated_at        DATETIME       DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (
        id_doctor
    )
    REFERENCES doctors (id_doctor),
    FOREIGN KEY (
        id_service
    )
    REFERENCES services (id_service) 
);

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price,
                                 created_at,
                                 updated_at
                             )
                             VALUES (
                                 1,
                                 1,
                                 1,
                                 299.99,
                                 '2024-10-28 15:58:12',
                                 '2024-10-28 16:00:05'
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price,
                                 created_at,
                                 updated_at
                             )
                             VALUES (
                                 2,
                                 5,
                                 2,
                                 650,
                                 '2024-10-28 15:57:00',
                                 '2024-10-28 15:58:01'
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price,
                                 created_at,
                                 updated_at
                             )
                             VALUES (
                                 3,
                                 7,
                                 4,
                                 1700,
                                 '2024-10-28 17:34:30',
                                 '2024-10-28 17:34:30'
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price,
                                 created_at,
                                 updated_at
                             )
                             VALUES (
                                 4,
                                 9,
                                 3,
                                 5000,
                                 '2024-10-28 17:35:13',
                                 '2024-10-28 17:35:13'
                             );

INSERT INTO doctors_services (
                                 id_doctor_service,
                                 id_doctor,
                                 id_service,
                                 price,
                                 created_at,
                                 updated_at
                             )
                             VALUES (
                                 5,
                                 7,
                                 1,
                                 299.99,
                                 '2024-10-28 18:51:13',
                                 '2024-10-28 18:51:13'
                             );


-- Tabela: schedules
CREATE TABLE IF NOT EXISTS schedules (
    id_schedule INTEGER     PRIMARY KEY,
    time        VARCHAR (5),
    created_at  TIMESTAMP   DEFAULT (CURRENT_TIMESTAMP),
    updated_at  DATETIME    DEFAULT (CURRENT_TIMESTAMP) 
);

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          2,
                          '08:30',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          3,
                          '09:00',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          4,
                          '09:30',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          5,
                          '10:00',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          6,
                          '10:30',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          7,
                          '11:00',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          8,
                          '11:30',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          9,
                          '12:00',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          10,
                          '13:30',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          11,
                          '14:00',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          12,
                          '14:30',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          13,
                          '15:00',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          14,
                          '15:30',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          15,
                          '16:00',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          16,
                          '16:30',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          17,
                          '17:00',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          18,
                          '17:30',
                          '2024-11-02 10:27:11',
                          '2024-11-02 10:27:11'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          19,
                          '18:00',
                          '2024-11-02 11:05:21',
                          '2024-11-02 11:05:21'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          20,
                          '18:30',
                          '2024-11-02 11:07:58',
                          '2024-11-02 11:07:58'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          21,
                          '19:00',
                          '2024-11-02 11:09:14',
                          '2024-11-02 11:09:14'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          22,
                          '19:30',
                          '2024-11-02 11:13:15',
                          '2024-11-02 11:13:15'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          23,
                          '20:00',
                          '2024-11-02 11:14:26',
                          '2024-11-02 11:14:26'
                      );

INSERT INTO schedules (
                          id_schedule,
                          time,
                          created_at,
                          updated_at
                      )
                      VALUES (
                          24,
                          '08:00',
                          '2024-11-02 11:19:42',
                          '2024-11-02 11:19:42'
                      );


-- Tabela: services
CREATE TABLE IF NOT EXISTS services (
    id_service  INTEGER      PRIMARY KEY AUTOINCREMENT,
    description VARCHAR (50),
    created_at  TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at  DATETIME     DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO services (
                         id_service,
                         description,
                         created_at,
                         updated_at
                     )
                     VALUES (
                         1,
                         'Consulta Médica',
                         '2024-10-28 18:53:49',
                         '2024-10-28 18:53:49'
                     );

INSERT INTO services (
                         id_service,
                         description,
                         created_at,
                         updated_at
                     )
                     VALUES (
                         2,
                         'Drenagem Linfática',
                         '2024-10-28 18:53:49',
                         '2024-10-28 18:53:49'
                     );

INSERT INTO services (
                         id_service,
                         description,
                         created_at,
                         updated_at
                     )
                     VALUES (
                         3,
                         'Lipoaspiração',
                         '2024-10-28 18:53:49',
                         '2024-10-28 18:53:49'
                     );

INSERT INTO services (
                         id_service,
                         description,
                         created_at,
                         updated_at
                     )
                     VALUES (
                         4,
                         'Mamoplastia',
                         '2024-10-28 18:53:49',
                         '2024-10-28 18:53:49'
                     );


-- Tabela: users
CREATE TABLE IF NOT EXISTS users (
    id_user    INTEGER       PRIMARY KEY AUTOINCREMENT,
    name       VARCHAR (255),
    date_birth VARCHAR (10),
    cell       VARCHAR (20),
    email      VARCHAR (255),
    password   VARCHAR (255),
    created_at DATETIME      DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME      DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (
                      id_user,
                      name,
                      date_birth,
                      cell,
                      email,
                      password,
                      created_at,
                      updated_at
                  )
                  VALUES (
                      1,
                      'Hugolino B. Guimarães',
                      '26/09/1993',
                      '(18) 99696-5987',
                      'hugolino.guimaraes@hbgsystem.com.br',
                      '$2b$10$iOBACVgf0RqRJb0zFGa3U.KTxJ64bo.6A/tdP6aLLH9pAMiSpCxNu',
                      '2024-10-28 13:53:05',
                      '2024-10-28 13:53:05'
                  );

INSERT INTO users (
                      id_user,
                      name,
                      date_birth,
                      cell,
                      email,
                      password,
                      created_at,
                      updated_at
                  )
                  VALUES (
                      4,
                      'João Andrade',
                      '01/12/2003',
                      '(18) 99696-5987',
                      'joao.andrade@hbgsystem.com.br',
                      '$2b$10$iyCC9fp/6XJTLYj.pq71Oeg0ctwH2tC1kguhKZfC9tfK65ym/PiRy',
                      '2024-10-28 16:29:42',
                      '2024-10-28 16:29:42'
                  );

INSERT INTO users (
                      id_user,
                      name,
                      date_birth,
                      cell,
                      email,
                      password,
                      created_at,
                      updated_at
                  )
                  VALUES (
                      10,
                      'Pedro Henrique Gomes de Andrade',
                      '13/12/1997',
                      '(18) 96525-3987',
                      'pedro.andrade@teste.com.br',
                      '$2b$10$P6IMy8GlrH0Ysq9ghL9OgugYfYZ5R40QPtowMZdZF5.F3ClQJefjq',
                      '2024-10-31 16:26:55',
                      '2024-10-31 16:26:55'
                  );


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;

let table1 = [
    {
        Name: "Anna",
        Year: "20",
        Country: "USA",
    },
    {
        Name: "John",
        Year: "20",
        Country: "USA",
    },
    {
        Name: "Tom",
        Year: "20",
        Country: "USA",
    },
    {
        Name: "Lelli",
        Year: "20",
        Country: "USA",
    },

    {
        Name: "Albert",
        Year: "20",
        Country: "USA",
    },

    {
        Name: "Alex",
        Year: "20",
        Country: "USA",
    },
    {
        Name: "Cris",
        Year: "20",
        Country: "USA",
    },
    {
        Name: "Marry",
        Year: "20",
        Country: "USA",
    },

    {
        Name: "Emma",
        Year: "20",
        Country: "USA"
    },
    {
        Name: "Liam",
        Year: "21", Country:
            "USA"
    },
    {
        Name: "Olivia",
        Year: "22",
        Country: "USA"
    }, 
    {
        Name: "Noah",
        Year: "23",
        Country: "USA"
    },
    {
        Name: "Ava",
        Year: "24",
        Country: "USA"
    },
    {
        Name: "Elijah",
        Year: "25", Country: "USA"
    },
    {
        Name: "Sophia", Year: "26",
        Country: "USA"
    },
    {
        Name: "James", Year:
            "27",
        Country: "USA"
    },
    {
        Name: "Isabella",
        Year: "28",
        Country: "USA"
    },
    {
        Name: "Benjamin",
        Year: "29",
        Country: "USA"
    },
    {
        Name: "Mia", Year: "20",
        Country: "USA"
    },
    {
        Name: "Lucas",
        Year: "21",
        Country: "USA"
    },
    {
        Name: "Charlotte",
        Year: "22",
        Country: "USA"
    },
    {
        Name: "Mason",
        Year: "23",
        Country: "USA"
    },
    {
        Name: "Amelia",
        Year: "24",
        Country: "USA"
    },
    {
        Name: "Ethan",
        Year: "25",
        Country: "USA"
    },
    {
        Name: "Harper",
        Year: "26",
        Country: "USA"
    },
    {
        Name: "Alexander",
        Year: "27",
        Country: "USA"
    },
    {
        Name: "Evelyn",
        Year: "28",
        Country: "USA"
    },
    {
        Name: "Henry",
        Year: "29",
        Country: "USA"
    },
];

function f1() {
    let table = document.getElementById("table");

    // создаём переменную для HTML
    let table2 = `
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Город</th>
    </tr>
  `;

    // добавляем строки через цикл
    for (let i = 0; i < table1.length; i++) {
        table2 += `
      <tr>
        <td>${table1[i].Name}</td>
        <td>${table1[i].Year}</td>
        <td>${table1[i].Country}</td>
      </tr>
    `;
    }

    // вставляем HTML в таблицу
    table.innerHTML = table2;
}
f1();

function searchPerson() {
    let val = document.getElementById('name').value;

    let res = table1.filter((item) =>
        item.Name.toLowerCase().includes(val.toLowerCase()) ||
        item.Year.toString().includes(val) ||
        item.Country.toLowerCase().includes(val.toLowerCase())
    );


    console.log(res);

    if (res.length > 0) {
        let table2 = `
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Город</th>
        </tr>
        `;

        // добавляем строки через цикл
        for (let i = 0; i < res.length; i++) {
            table2 += `
          <tr>
            <td>${res[i].Name}</td>
            <td>${res[i].Year}</td>
            <td>${res[i].Country}</td>
          </tr>
        `;
        }

        document.getElementById("table").innerHTML = table2;

    } else {
        f1(); // если ничего не найдено, показываем всю таблицу
    }
}





const productos = [
    {
        id: 1,
        nombre: "Adult Complete Razas Medianas",
        marca: "PRO PLAN",
        marcall: "all",
        img: "/img/productos/pro-plan-adult-complete-razas-medianas_143.png",
        mascotaId: 1,
        mascota: {
            nombreMascota: "Perro",
            idMascota: 1
        },
        tipoprod: "Alimento Balanceado",
        peso: "15 kgs",
        precio: 7000,
        stock: 100,
        descripcion: "Es una alimento que provee nutrición de avanzada. Esta fórmula ofrece, a través de sus sabrosas croquetas, un contenido rico en proteínas (26%) y grasas (15%)."
    },
    {
        id: 2,
        nombre: "Balanced Exclusive Recipe Cerdo y Arroz",
        marca: "VITAL CAN",
        marcall: "all",
        img: "/img/productos/vital-can-balanced-exclusive-recipe-cerdo-y-arroz_427.png",
        mascotaId: 1,
        mascota: {
            nombreMascota: "Perro",
            idMascota: 1
        },
        tipoprod: "Alimento Balanceado",
        peso: "15 kgs",
        precio: 5500,
        stock: 120,
        descripcion: "Es un alimento basado en una única fuente de proteínas de origen animal para minimizar las posibles reacciones al alimento en pacientes alérgicos y/o intolerantes alimentarios."
    },
    {
        id: 3,
        nombre: "Puppy Complete Razas Medianas",
        marca: "PRO PLAN",
        marcall: "all",
        img: "/img/productos/pro-plan-puppy-complete-razas-medianas_137.png",
        mascotaId: 1,
        mascota: {
            nombreMascota: "Perro",
            idMascota: 1
        },
        tipoprod: "Alimento Balanceado",
        peso: "15 kgs",
        precio: 6000,
        stock: 90,
        descripcion: "Es un alimento que durante la “brecha inmunológica” y provee nutrición completa. Ofrece una óptima nutrición para cachorros en crecimiento."
    },
    {
        id: 4,
        nombre: "Gastro Intestinal Cat",
        marca: "ROYAL CANIN",
        marcall: "all",
        img: "/img/productos/royal-canin-gastro-intestinal-cat_variacion_206.png",
        mascotaId: 2,
        mascota: {
            nombreMascota: "Gato",
            idMascota: 2
        },
        tipoprod: "Alimento Balanceado",
        peso: "2 kgs",
        precio: 3000,
        stock: 200,
        descripcion: "Es un alimento completo para gatos, formulado para ayudar en el manejo de los trastornos agudos de absorción intestinal y promover la restauración nutricional y convalecencia."
    },
    {
        id: 5,
        nombre: "Reduced Calorie Cat",
        marca: "PRO PLAN",
        marcall: "all",
        img: "/img/productos/pro-plan-reduced-calorie-cat_150.png",
        mascotaId: 2,
        mascota: {
            nombreMascota: "Gato",
            idMascota: 2
        },
        tipoprod: "Alimento Balanceado",
        peso: "7.5 kgs",
        precio: 5000,
        stock: 30,
        descripcion: "Es un alimento completo y balanceado para gatos poco activos o con exceso de peso. Es una tecnología exclusiva, gracias a la reducción de un 35% de las grasas."
    },
    {
        id: 6,
        nombre: "Cat Adult Complete Care",
        marca: "OLD PRINCE",
        marcall: "all",
        img: "/img/productos/old-prince-cat-adult-complete-care_197.png",
        mascotaId: 2,
        mascota: {
            nombreMascota: "Gato",
            idMascota: 2
        },
        tipoprod: "Alimento Balanceado",
        peso: "7.5 kgs",
        precio: 3500,
        stock: 50,
        descripcion: "Es un alimento que incorpora fuentes innovadoras de sales compuestas y fibras de baja fermentación, como Equilibrium y Fiber, con propiedades beneficiosas para perros y gatos."
    },
    {
        id: 7,
        nombre: "Adult Original Recipe",
        marca: "OLD PRINCE",
        marcall: "all",
        img: "/img/productos/old-prince-adult-original-recipe_196.png",
        mascotaId: 1,
        mascota: {
            nombreMascota: "Perro",
            idMascota: 1
        },
        tipoprod: "Alimento Balanceado",
        peso: "7.5 kgs",
        precio: 4500,
        stock: 350,
        descripcion: "Es un alimento basado en una balanceada combinación de pollo, carne y arroz como principales ingredientes. Su formulación fue pensada para proteger el sistema inmune."
    },
    {
        id: 8,
        nombre: "Adult Small Breed CH&R",
        marca: "PURINA EXCELLENT",
        marcall: "all",
        img: "/img/productos/purina-excellent-adult-small-breed-chyr_158.png",
        mascotaId: 1,
        mascota: {
            nombreMascota: "Perro",
            idMascota: 1
        },
        tipoprod: "Alimento Balanceado",
        peso: "15 kgs",
        precio: 4500,
        stock: 25,
        descripcion: "Es un alimento para perros adultos que tienen diferentes necesidades nutricionales que los cachorros o los perros maduros. Ofrece una fórmula completa que aportando un óptimo balance nutricional y un sabor irresistible."
    },
    {
        id: 9,
        nombre: "Gatos Castrados Weight Control",
        marca: "ROYAL CANIN",
        marcall: "all",
        img: "/img/productos/royal-canin-gatos-castrados-weight-control_variacion_199.png",
        mascotaId: 2,
        mascota: {
            nombreMascota: "Gato",
            idMascota: 2
        },
        tipoprod: "Alimento Balanceado",
        peso: "7.5 kgs",
        precio: 4000,
        stock: 50,
        descripcion: "Es un alimento que genera un efecto de saciedad para reducir el consumo espontáneo. Su fórmula con bajas calorías ayuda a mantener un peso ideal."
    },
    {
        id: 10,
        nombre: "Alimento Conejos Mezcla Especial",
        marca: "UNION PET",
        marcall: "all",
        img: "/img/productos/union-pet-alimento-conejos-mezcla-especial_200.png",
        mascotaId: 3,
        mascota: {
            nombreMascota: "Conejo",
            idMascota: 3
        },
        tipoprod: "Alimento Balanceado",
        peso: "3 kgs",
        precio: 1200,
        stock: 30,
        descripcion: "Es un alimento con crunchies de frutas y verduras. Alimento a base de materias primas de primera calidad que constituye una dieta balanceada a la medida de su mascota."
    },
    {
        id: 11,
        nombre: "Alimento Balanceado para Conejos",
        marca: "NELSONI RANCH",
        marcall: "all",
        img: "/img/productos/nelsoni-ranch-alimento-balanceado-para-conejos_236.png",
        mascotaId: 3,
        mascota: {
            nombreMascota: "Conejo",
            idMascota: 3
        },
        tipoprod: "Alimento Balanceado",
        peso: "750 grs",
        precio: 1900,
        stock: 75,
        descripcion: "Es un alimento balanceado que provee una optima nutrición con todas las vitaminas y nutrientes, manteniendo a su roedor vital y feliz."
    }
];

module.exports = {
    productos,
}
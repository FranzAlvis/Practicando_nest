interface Empleado {
    id: number;
    nombre: string;
}

interface Salario {
    id: number;
    salario: number;
}

const empleados: Empleado[] = [
    { id: 1, nombre: 'Fernando' },
    { id: 2, nombre: 'Melissa' },
    { id: 3, nombre: 'Juan' },
    { id: 4, nombre: 'Matias Huanca' },
];

const salarios: Salario[] = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 1500 },
    { id: 3, salario: 1500 },
    { id: 4, salario: 1500 },
];

export const getEmpleado = (id: number) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id)?.nombre;
        empleado ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
    }
    );
};

export const getSalario = (id: number) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id)?.salario;
        salario ? resolve(salario) : reject(`No existe salario con id ${id}`);
    }
    );
}

export const getTodo = async (id: number) => {
    try {
        const resEmpleado = await getEmpleado(id);
        const resSalario = await getSalario(id);
        return `El salario de ${resEmpleado} es de ${resSalario}`;
    } catch (error) {
        throw error;
    }
}


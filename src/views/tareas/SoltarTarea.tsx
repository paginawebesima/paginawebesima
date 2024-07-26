import { useDroppable } from '@dnd-kit/core';

type SoltarTareaProps = {
    estado: string;
};

export default function SoltarTarea({ estado }: SoltarTareaProps) {
    const { isOver, setNodeRef } = useDroppable({
        id: estado
    });

    const style = {
        opacity: isOver ? 0.4 : undefined
    };

    return (
        <div
            style={style}
            ref={setNodeRef}
            className="soltar-tarea"
        >
            Soltar tarea aquí
        </div>
    );
}

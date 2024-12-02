// Obtém o elemento canvas
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Ajusta o tamanho do canvas para ocupar 100% do container
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// Variáveis de controle do desenho
let drawing = false;
let lastX = 0;
let lastY = 0;
let brushColor = '#000000'; // Cor do pincel inicial

// Função para começar a desenhar
function startDrawing(e) {
    drawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Função para desenhar no canvas
function draw(e) {
    if (!drawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = brushColor; // Aplica a cor do pincel
    ctx.lineWidth = 5; // Espessura do pincel
    ctx.lineCap = 'round'; // Forma das extremidades do traço
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Função para parar de desenhar
function stopDrawing() {
    drawing = false;
}

// Função para limpar o canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Função para alterar a cor do pincel
function changeColor(color) {
    brushColor = color;
}

// Adiciona os ouvintes de evento para o canvas
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

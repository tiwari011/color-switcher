const Call = document.querySelectorAll('.button');
const body = document.querySelector('body');
const colorMap = {
    purple: 'purple',
    black: '#111',
    red: '#f50707',
    grey: '#6c757d',
    blue: '#007bff',
    green: '#28a745',
    yellow: '#ffc107',
    orange: '#fd7e14',
    pink: '#e83e8c',
    brown: '#8B4513',
    teal: '#20c997',
    cyan: '#00ced1',
};
Call.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const color = e.target.id; 
        console.log(`${color}`);
        
        body.style.backgroundColor = colorMap[color]; 
        console.log(`${colorMap}`);
        
    });
});

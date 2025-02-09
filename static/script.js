async function generateText() {
    const prompt = document.getElementById('prompt').value;
    const resultDiv = document.getElementById('result');
    
    if (!prompt) {
        alert('Please enter a prompt');
        return;
    }

    try {
        resultDiv.innerHTML = 'Generating...';
        
        const response = await fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: prompt })
        });

        const data = await response.json();
        
        if (data.error) {
            resultDiv.innerHTML = `Error: ${data.error}`;
        } else {
            resultDiv.innerHTML = data.result;
        }
    } catch (error) {
        resultDiv.innerHTML = `Error: ${error.message}`;
    }
} 
#!/bin/sh
ollama serve &

echo "⏳ Aguardando Ollama iniciar..."
until curl -s http://localhost:11434 > /dev/null; do
  sleep 1
done

echo "✅ Ollama iniciado. Baixando modelo..."
ollama pull tinyllama

wait
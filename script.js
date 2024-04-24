$(document).ready(function() {
    // adicionar tarefa ao enviar o formulário
    $("#taskForm").submit(function(event) {
        event.preventDefault(); // Impedir o comportamento padrão do formulário

        // obter o valor do campo de entrada
        var taskName = $("#taskInput").val().trim();

        // verificar se o campo não está vazio
        if (taskName !== "") {
            // adicionar a nova tarefa à lista
            $("#taskList").append("<li>" + taskName + "</li>");
            // limpar o campo de entrada
            $("#taskInput").val("");
        }
    });

    // marcar a tarefa como concluída ao clicar
    $("#taskList").on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});